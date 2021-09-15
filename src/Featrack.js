import axios from 'axios';
import React, {useState} from 'react';
import {Block, Box, Container, Form, Heading, Hero} from 'react-bulma-components';

import TrackInfo from './TrackInfo';


import 'bulma/css/bulma.min.css';

axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded'
const { Input } = Form;


function Featrack() {
    const [track, setId] = useState('')
    const [pressedKey, setKey] = useState(NaN)
    const [idType, setIdType] = useState('')

    function parseId(value){
        const url = new URL(value)
        console.log(url)
        if (url.protocol === 'https:') {
            const paths = url.pathname.split('/')
            if (paths[1] === 'track') {
                setIdType(paths[1])
                return paths[2]
            }
        }
        else if (url.protocol === 'spotify:') {
            const parts = url.pathname.split(':')
            if (parts.length === 2 && parts[0] === 'track') {
                setIdType(parts[0])
                return parts[1]
            }
        }
    }

    function handlePress(e){
        if (e.which === 13){
            e.preventDefault()
            const trackId = parseId(e.target.value)
            setId(trackId)
            setKey(e.which)
        }
    }

    return (
        <div>
            <Hero>
                <Hero.Body>
                    <Container>
                        <Heading size={1} textAlign={"center"}>
                            FEATRACK
                        </Heading>
                        <Heading subtitle size={5} textAlign={"center"}>
                            Browse audio features with Spotify API
                        </Heading>
                        <Block>
                            <Box style={{ width: 600, margin: 'auto' }}>
                                <Input
                                    size="medium"
                                    type="text"
                                    placeholder="Track URL or Spotify URI"
                                    defaultValue={track}
                                    onKeyDown={(e) => handlePress(e)}
                                />
                            </Box>
                        </Block>
                        <Block>
                            <TrackInfo keyNum={pressedKey} trackId={track} idType={idType}/>
                        </Block>
                    </Container>
                </Hero.Body>
            </Hero>
        </div>
    )
}

export default Featrack