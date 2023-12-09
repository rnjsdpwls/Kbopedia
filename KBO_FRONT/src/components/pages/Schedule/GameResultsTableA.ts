import gameresults from 'styled-components'

export const Container = gameresults.div`
    display: flex;
    justify-content: space-around;
`
export const TimeA = gameresults.p`
    text-align: center;
    margin: 30px 25px;
    line-height: 2px;
    vertical-align: middle;
    flex: 1;
`
export const Same = gameresults.p`
    text-align: center;
    margin: 30px;
    Line-height: 2px;
    vertical-align: middle;
    flex: 1;
`
export const Time = gameresults.div`
    text-align: center;
    margin: 30px 50px;
    line-height: 2px;
    vertical-align: middle;
    flex: 1;
`
export const CellD = gameresults.div`
    display: flex;
    flexDirection: row;
    alignItems: center;
    justifyContent: center;
`
export const TeamandScore = gameresults.p`
    text-align: center;
    margin: 30px;
    line-height: 2px;
    vertical-align: middle;
    flex: 1;
`
export const Hline = gameresults.hr`
    width: 1300px;
    height: 2px;
    border: 1;
    backgroundColor: green;
`
export const HrB  = gameresults.hr`
    width: 1000px;
    height: 2px;
    border: 1;
    backgroundColor: green;
`
export const Above = gameresults.div`
    margin: 0 auto;
    display: flex;
    flexDirection: row;
`