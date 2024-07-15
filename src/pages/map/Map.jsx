import { useEffect } from "react";
const { kakao } = window;

export default function Map() {
  useEffect(() => {
    //지도 렌더링 위치 지정
    const container = document.getElementById("map");
    //지도 생성(렌더링)
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    /**
     * 
    //마커 위치 지정
    let markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);

    // 마커 생성
    const marker = new kakao.maps.Marker({
      position: markerPosition
    });

    //마커 지도에 표시
    marker.setMap(map);
     * 
     */

    ///////////////////////////////////////////////////////

    //현재 위치 불러올 수 있는지
    if (navigator.geolocation) {
    
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function(position) {
          
          let lat = position.coords.latitude, // 위도
              lon = position.coords.longitude; // 경도

          const options = {
            center: new kakao.maps.LatLng(lat, lon),
            level: 3,
          };
          const map = new kakao.maps.Map(container, options);  
        });
      
    } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
        var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),    
            message = 'geolocation을 사용할수 없어요..'
            
        displayMarker(locPosition, message);
    }

    const displayMarker = (locPosition, message) => {

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({  
          map: map, 
          position: locPosition
      }); 
      
      var iwContent = message, // 인포윈도우에 표시할 내용
          iwRemoveable = true;
  
      // 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
          content : iwContent,
          removable : iwRemoveable
      });
      
      // 인포윈도우를 마커위에 표시합니다 
      infowindow.open(map, marker);
      
      // 지도 중심좌표를 접속위치로 변경합니다
      map.setCenter(locPosition);      
    }   
    
  }, []);

  return (
    <div
      id="map"
      style={{
        width: "500px",
        height: "500px",
      }}
    ></div>
  );
}