import gameresults from 'styled-components'

export const Container = gameresults.div`
    display: flex;
    justify-content: space-around;
`
export const TimeA = gameresults.p`
    text-align: center;
    margin: 30px 5px;
    line-height: 2px;
    vertical-align: middle;
    flex: 1;
    font-size: 40px;
`
export const Same = gameresults.p`
    text-align: center;
    margin: 30px 15px;
    Line-height: 2px;
    vertical-align: middle;
    flex: 1;
    font-size: 35px;
`
export const Time = gameresults.div`
    text-align: center;
    margin: 30px 50px;
    line-height: 2px;
    vertical-align: middle;
    flex: 1;
    font-size: 20px;
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
    font-size: 20px;
`
export const Hline = gameresults.hr`
    width: 1300px;
    height: 2px;
    border-color: green;
    
`
export const HrB  = gameresults.hr`
    width: 1000px;
    height: 2px;
    border-color: green;
   
`
export const Above = gameresults.div`
    margin: 0 auto;
    display: flex;
    flexDirection: row;
`
export const StyledContainer = gameresults.div`
    flex: 1;
    display: flex;
    flex-direction: column; 
`

export const StyleDiv = gameresults.div`
    text-align: center;
    margin: 30px;
    line-height: 2px;
    vertical-align: middle;
    flex: 1;
    font-size: 20px;
    `
export const StyledContainerbig = gameresults.div`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`