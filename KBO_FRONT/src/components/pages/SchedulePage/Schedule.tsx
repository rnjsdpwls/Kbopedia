import React from 'react';
//import './GameResultsTable.css';

export default function Schedule() {
  return (


    <div className="centered" style={{ position: 'relative', top: '60px', margin: '0 auto', width: '1300px', marginTop: '200px' }}>
      <hr style={{ width: '1300px', height: '2px', border: '0', backgroundColor: 'green' }} /> {/* 초록색 */}

      <div style={{ margin: '0 auto', display: 'flex', flexDirection: 'row', justifyContent: 'center', marginRight: "-3px" }}>
        <p style={{ textAlign: 'center', margin: '30px 25px', lineHeight: '2px', verticalAlign: 'middle', flex: 1 }}>날짜</p>
        <p style={{ textAlign: 'center', margin: '30px', lineHeight: '2px', verticalAlign: 'middle', flex: 1 }}>시간</p>
        <p style={{ textAlign: 'center', margin: '30px', lineHeight: '2px', verticalAlign: 'middle', flex: 1 }}>경기</p>
        <p style={{ textAlign: 'center', margin: '30px', lineHeight: '2px', verticalAlign: 'middle', flex: 1 }}>구장</p>
      </div>

      <hr style={{ width: '1300px', height: '2px', border: '0', backgroundColor: 'green' }} /> {/* 초록색 */}

      <div style={{ margin: '0 auto', display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p>10.01(일)</p>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ textAlign: 'center', margin: '30px 50px', lineHeight: '2px', verticalAlign: 'middle', flex: 1 }}>14:00</p>
            <p style={{ textAlign: 'center', margin: '30px', lineHeight: '2px', verticalAlign: 'middle', flex: 1 }}>LG 7 vs 4 두산</p>
            <p style={{ textAlign: 'center', margin: '30px', lineHeight: '2px', verticalAlign: 'middle', flex: 1 }}>잠실</p>
          </div>

          <hr style={{ width: '1000px', height: '2px', border: '0', backgroundColor: 'green' }} /> {/* 초록색 */}

          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ textAlign: 'center', margin: '30px 50px', lineHeight: '2px', verticalAlign: 'middle', flex: 1 }}>14:00</p>
            <p style={{ textAlign: 'center', margin: '30px', lineHeight: '2px', verticalAlign: 'middle', flex: 1 }}>KIA 4 vs 6 SSG</p>
            <p style={{ textAlign: 'center', margin: '30px', lineHeight: '2px', verticalAlign: 'middle', flex: 1 }}>문학</p>
          </div>
        </div>
      </div>

      <hr style={{ width: '1300px', height: '2px', border: '0', backgroundColor: 'green' }} /> {/* 초록색 */}


      <div style={{ margin: '0 auto', display: 'flex', flexDirection: 'row', marginLeft: '-235px' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p> 10.02(월)</p>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft: "-230px" }}>
            <p style={{ textAlign: 'center', margin: '30px 50px', lineHeight: '2px', verticalAlign: 'middle', flex: 1 }}>14:00</p>
            <p style={{ textAlign: 'center', margin: '30px', lineHeight: '2px', verticalAlign: 'middle', flex: 1 }}>LG 7 vs 4 두산</p>
            <p style={{ textAlign: 'center', margin: '30px', lineHeight: '2px', verticalAlign: 'middle', flex: 1 }}>잠실</p>
          </div>



          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft: "-230px" }}>
            <p style={{ textAlign: 'center', margin: '30px 50px', lineHeight: '2px', verticalAlign: 'middle', flex: 1 }}>14:00</p>
            <p style={{ textAlign: 'center', margin: '30px', lineHeight: '2px', verticalAlign: 'middle', flex: 1 }}>KIA 4 vs 6 SSG</p>
            <p style={{ textAlign: 'center', margin: '30px', lineHeight: '2px', verticalAlign: 'middle', flex: 1 }}>문학</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft: "-230px" }}>
            <p style={{ textAlign: 'center', margin: '30px 50px', lineHeight: '2px', verticalAlign: 'middle', flex: 1 }}>14:00</p>
            <p style={{ textAlign: 'center', margin: '30px', lineHeight: '2px', verticalAlign: 'middle', flex: 1 }}>LG 4 vs 6 NC</p>
            <p style={{ textAlign: 'center', margin: '30px', lineHeight: '2px', verticalAlign: 'middle', flex: 1 }}>문학</p>
          </div>

        </div>
      </div>

      <hr style={{ width: '1300px', height: '2px', border: '0', backgroundColor: 'green' }} /> {/* 초록색 */}
    </div>













  );
}

