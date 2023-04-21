<!--사용자 이용내역-->

<template>
    <div class="wrapper">
      <div class="content">
        <v-carousel cycle height="10" hide-delimiter-background show-arrows="hover"></v-carousel>
                <div class="myWashing">
                    <b>내 세탁물</b>
                </div>

                <div class="date">
                    <b>2023.03.18</b>
                </div>
                <div class="washingStatus">
                    <span><img id="washingImg" src="./assets/knit.jpg"></span>
                    <span>
                        <p id="name"> 품 &nbsp;&nbsp;&nbsp; 목&nbsp; | &nbsp;니트 &nbsp;&nbsp;∙<a class="delivery" style="color: red;"> 배송중</a>
                        </p>
                        <p id="cost">세탁비용 | &nbsp;10,000원</p>
                        <p id="requirement">요청사항 | &nbsp;얼룩 깨끗하게 지워주세요</p>
                    </span>
                </div>

                <hr id="divisionLine">
                <div class="myWashing">
                    <b>세탁 내역</b>
                </div>

                <div class="date" id="date">
                    <b>2023.03.11</b>
                </div>
                <div class="washingStatus">
                    <span><img id="washingImg" src="./assets/shoes.jpg"></span>
                    <span>
                        <p id="name"> 품 &nbsp;&nbsp;&nbsp; 목&nbsp; | &nbsp;운동화 &nbsp;&nbsp;∙ <a class="delivery">배송완료(3/14)</a></p>
                        <p id="cost">세탁비용 | &nbsp;12,000원</p>
                        <p id="requirement">요청사항 | &nbsp;변색 복구 부탁드립니다</p>
                    </span>
                </div>
                <div class="washingStatus">
                    <span><img id="washingImg" src="./assets/jean.jpg"></span>
                    <span>
                        <p id="name"> 품 &nbsp;&nbsp;&nbsp; 목&nbsp; | &nbsp;청바지 &nbsp;&nbsp;∙ <a class="delivery">배송완료(3/14)</a></p>
                        <p id="cost">세탁비용 | &nbsp;13,000원</p>
                        <p id="requirement">요청사항 | &nbsp;기장 2cm 줄여주세요</p>
                    </span>
                </div>

                <div class="date" id="date">
                    <b>2023.03.10</b>
                </div>
                <div class="washingStatus">
                    <span><img id="washingImg" src="./assets/washings.png"></span>
                    <span>
                        <p id="name"> 품 &nbsp;&nbsp;&nbsp; 목&nbsp; | &nbsp;종합세탁물 &nbsp;&nbsp;∙ <a class="delivery">배송완료(3/12)</a></p>
                        <p id="cost">세탁비용 | &nbsp;10,000원</p>
                        <p id="requirement">요청사항 | &nbsp;없음</p>
                    </span>
                </div>
      </div>
    </div>
</template>

<style>

.myWashing {
    margin-left: 6%;
    margin-top: 20px;
    font-size: 18px;
    margin-bottom: -5px;
}

#divisionLine {
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 40px;
  margin-bottom: 30px;
}

.date {
    margin-top: 40px;
    margin-left: 6%;
    font-size: 15px;
}

.washingStatus {
    height: 110px;
    border-radius: 13px;
    font-size: smaller;
    background-color: white;
    border: 1px solid gainsboro;
    font-display: center;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 15px;
    margin-top: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: scroll;
}

#name {
    margin-top: 19px;
    margin-bottom: 5px;
}
#cost {
    margin-bottom: 5px;
}

.delivery {
    color: red;
    text-decoration-line: none;
}

#washingImg {
    width: 70px;
    height: 70px;
    float: left;
    margin-left: 20px;
    margin-top: 20px;
    margin-right: 20px;
    border-radius: 15%;
}

</style>