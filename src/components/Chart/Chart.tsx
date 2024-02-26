import { LineChart, yAxisSides } from "react-native-gifted-charts";
import { View, Text, Dimensions} from "react-native";
// import {ChartPoint} from "../../types";
import { itemType } from "react-native-gifted-charts/src/LineChart/types";
import findMinMaxInColumn from "../../utils/2D-ArrayUtils"


const getChartData = (prices:number[][]):itemType[] => {
  const { min, max } = findMinMaxInColumn(prices, 1)
  console.log("Min & Max Price In List", min, max)
  return prices.map(price=>({value: (Number(((price[1]-min)).toFixed(2)))}))
}

interface ChartComponentProps{
  prices: number[][]
}

const Chart = ({prices}:ChartComponentProps) => {

  const lineChartData = getChartData(prices)
  const { min, max } = findMinMaxInColumn(prices, 1)

  // console.log(lineChartData)
  
  return(
    <View
      style={{
        paddingVertical: 0,
        paddingLeft: 0,
        margin: 0,
        backgroundColor: '#121212',
      }}>
      <LineChart
        areaChart
        data={lineChartData}
        // rotateLabel
        width={Dimensions.get('window').width}
        hideDataPoints
        spacing={1}
        color="#00ff83"
        thickness={2}
        startFillColor="rgba(20,105,81,0.5)"
        endFillColor="rgba(20,85,81,0)"
        startOpacity={0.9}
        endOpacity={0.2}
        initialSpacing={0}
        noOfSections={6}
        maxValue={(max-min)}
        yAxisColor="white"
        yAxisThickness={0}
        rulesType="solid"
        rulesColor="rgba(130,130,130, 0.3)"
        // yAxisTextStyle={{color: 'gray'}}
        // yAxisSide = {yAxisSides.LEFT}
        hideYAxisText

        xAxisColor="#aaa"
        xAxisType="dashed"

        // animations
        isAnimated
        animationDuration={2000}

        pointerConfig={{
          pointerStripHeight: 130,
          pointerStripWidth: 1,
          pointerStripColor: '#fff',
          pointerColor: 'white',
          radius: 4,
          pointerLabelWidth: 100,
          pointerLabelHeight: 90,
          activatePointersOnLongPress: true,
          autoAdjustPointerLabelPosition: false,
          pointerLabelComponent: (items:itemType[]) => {
            // console.log("Items", items)
            return (
              <View
                style={{
                  height: 90,
                  width: 100,
                  justifyContent: 'center',
                  marginTop: -30,
                  marginLeft: -40,
                }}>
                {/* <Text style={{color: 'white', fontSize: 14, marginBottom:6,textAlign:'center'}}>
                  {items[0].date}
                </Text> */}

                <View style={{paddingHorizontal:14,paddingVertical:6, borderRadius:16, backgroundColor:'white'}}>
                  <Text style={{fontWeight: 'bold',textAlign:'center'}}>
                    {'$' + items[0].value + '.0'}
                  </Text>
                </View>
              </View>
            );
          },
        }}
      />
      </View>
  );
}


export default Chart