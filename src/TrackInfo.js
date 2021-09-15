import {Buffer} from "buffer";

import axios from "axios";
import React, {useState, useLayoutEffect} from 'react';
import {Block, Button, Card, Heading, Media, Notification} from "react-bulma-components";

import './Featrack.css';
import 'bulma/css/bulma.min.css';

const PITCH_CLASS = {
    0: 'C',
    1: 'C#',
    2: 'D',
    3: 'D#',
    4: 'E',
    5: 'F',
    6: 'F#',
    7: 'G',
    8: 'G#',
    9: 'A',
    10: 'A#',
    11: 'B',
}

const MODE = {
    0: 'Minor',
    1: 'Major'
}

axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded'

function Beatrack(props) {
    const [token, setToken] = useState('')
    const [artist, setArtist] = useState('')
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [duration, setDuration] = useState('')
    const [bpm, setBpm] = useState(0)
    const [pitch, setPitch] = useState('')
    const [statusCode, setStatusCode] = useState(200)

    function msToMinutesAndSecond(millis){
        const minutes = Math.floor(millis / 60000)
        const seconds = ((millis % 60000) / 1000).toFixed(0)
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds
    }

    function getToken() {
        const clientId = process.env.REACT_APP_SPOTIFY_API_CLIENT_ID
        const clientSecret = process.env.REACT_APP_SPOTIFY_API_CLIENT_SECRET
        const data = 'grant_type=client_credentials'
        const config = {
            headers: {
                'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`, 'utf-8').toString('base64')}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }
        axios.post(
            'https://accounts.spotify.com/api/token',
            data,
            config
        ).then(res => {
            console.log(res['data'])
            setToken(res['data']['access_token'])
        }).catch(error => {
            console.log(error)
        })
    }

    function getHeaders(){
        return {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        }
    }

    function getTrackInfo(trackId) {
        const config = getHeaders()
        axios.get(
            `https://api.spotify.com/v1/tracks/${trackId}`,
            config
        ).then(res => {
            const data = res.data
            console.log(data)
            setArtist(data['artists'][0]['name'])
            setImage(data['album']['images'][0]['url'])
            setTitle(data['name'])
            setDuration(msToMinutesAndSecond(data['duration_ms']))
        }).catch(error => {
            setStatusCode(error.response.status)
        })
        axios.get(
            `https://api.spotify.com/v1/audio-features?ids=${trackId}`,
            config
        ).then(res => {
            const data = res['data']
            const audio_features = data['audio_features'][0]
            console.log(audio_features)
            setBpm(audio_features['tempo'].toFixed(1))
            setPitch(
                PITCH_CLASS[audio_features['key']].concat(' ', MODE[audio_features['mode']])
            )
        }).catch(error => {
            return false
        })
    }

    function copyHandler() {
        const trackFeatures = [
            title,
            artist,
            bpm,
            pitch
        ]
        const csvTrackFeatures = trackFeatures.join()
        navigator.clipboard.writeText(csvTrackFeatures).then(result =>{
            console.log(`Copy ${csvTrackFeatures} to clipboard.`)
        }).catch(error =>{
            console.log('Failed to copy track features to clipboard.')
        })
    }

    useLayoutEffect(
        () => {
            getToken()
            if (props.trackId) {
                console.log(props.trackId)
                setArtist('')
                setTitle('')
                getTrackInfo(props.trackId)
            }
        },
        [props.trackId]
    )

    if (props.trackId === ''){
        return (
            <div></div>
        )
    }
    else if (props.idType !== 'track'){
        return (
            <div>
                <Block textAlign={"center"} style={{ width: 300, margin: 'auto'}}>
                    <Notification color={"warning"}>
                        <p>ERROR: URL/URI is not track.</p>
                    </Notification>
                </Block>
            </div>
        )
    }
    else if (artist === ''){
        return (
            <div></div>
        )
    }
    return(
        <div>
            <Card style={{ width: 350, margin: 'auto'}}>
                <Card.Header>
                    <Card.Header.Title size={6}>
                        {title}<br/>
                        {artist}
                    </Card.Header.Title>
                </Card.Header>
                <Card.Image size={'square'} src={image} />
                <Card.Content>
                    <Media>
                        <Media.Item>
                            <Heading subtitle size={6}>
                                <p>BPM: {bpm}</p>
                                <p>Key: {pitch}</p>
                                <p>Duration: {duration}</p>
                            </Heading>
                        </Media.Item>
                    </Media>
                    <Button onClick={copyHandler}>
                        Copy audio features to clipboard
                    </Button>
                </Card.Content>
            </Card>
        </div>
    )

}

export default Beatrack