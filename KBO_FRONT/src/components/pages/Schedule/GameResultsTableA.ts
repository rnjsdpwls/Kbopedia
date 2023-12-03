import gameresults from 'styled-components'

export const Container = gameresults.div`
    display: flex;
    justify-content: space-around;
`
export const CellA = gameresults.p`
    text-align: center;
    margin: 30px 25px;
    line-height: 2px;
    vertical-align: middle;
    flex: 1;
`
export const CellB = gameresults.p`
    text-align: center;
    margin: 30px;
    Line-height: 1px;
    vertical-align: middle;
    flex: 1;
`
export const CellC = gameresults.div`
    flex: 1;
    display: flex;
    flexDirection: column;
`
export const CellD = gameresults.div`
    display: flex;
    flexDirection: row;
    alignItems: center;
    justifyContent: center;
`
export const CellE = gameresults.p`
    textAlign: center;
    margin: 60px 50px 70px;
    Line-height: 1px;
    vertical-align: middle;
    flex: 1;
   
`

