# Reaact 일정관리앱

    1. prettier 설정하기
    2. Eslint 셋팅(코드정리)
    
    
<img width="573" alt="스크린샷 2021-05-24 오전 12 03 30" src="https://user-images.githubusercontent.com/38008152/119265908-88cdd480-bc23-11eb-8d3f-ae6c7eea027b.png">
    


### react-virtualized를 사용한 렌더링 
~~~
   예를 들어 리스트에 2500여개의 리스트를 한번에 불러가지고올때
   화면에 한번에 보이지 않음에도 불구하고 해당 리스트 전부를 불러가지고온다
   이러한 비효율적인 것을 방지하기위해 2500개만큼의 리스트 크기만 차지해주고 
   화면에 보여질때만 렌더링 시켜주는  virtualized를 써보자
   
   // 추가방법
   yarn add react-virtualized
~~~