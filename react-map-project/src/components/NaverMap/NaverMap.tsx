import { useEffect, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const callNaverMap = (
  mapElement: React.MutableRefObject<null>,
  lot: number,
  rat: number
) => {
  const { naver } = window;
  if (!mapElement.current || !naver) return;

  // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
  const location = new naver.maps.LatLng(35.9304, 126.9578);
  const zoomLevel = 17;

  const mapOptions: naver.maps.MapOptions = {
    center: location,
    zoom: zoomLevel,
    zoomControl: true,
    zoomControlOptions: {
      position: naver.maps.Position.TOP_RIGHT,
    },
  };
  const map = new naver.maps.Map(mapElement.current, mapOptions);
  new naver.maps.Marker({
    position: location,
    map,
  });
};

const NaverMap = () => {
  const mapElement = useRef(null);

  useEffect(() => {
    callNaverMap(mapElement, 35.9304, 126.9578);
  }, []);

  return <Container ref={mapElement}>{`doyeon`}</Container>;
};

export default NaverMap;
