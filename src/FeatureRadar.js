import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
} from "recharts";


function FeatureRadar(props){
    return (
       <RadarChart
            cx={125}
            cy={100}
            outerRadius={50}
            width={300}
            height={200}
            data={props.features}
        >
            <PolarGrid />
            <PolarAngleAxis dataKey="feature" tickSize={1}/>
            <Radar
                dataKey="value"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
            />
        </RadarChart>
    )
}

export default FeatureRadar