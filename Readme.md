# youtube-clone

Node.js를 공부하고 익히기 위해 youtube를 cloning한 프로젝트입니다.

## 화면 구성 : 
- [Home](#home)
  - [Join](#join)
  - [Login](#login)
  - [Profile](#profile)
    - Edit Profile
    - Change Password 
  - [Upload](#upload)
  - [Video Detail](#video-detail)
    - Edit Video

## 화면 설명

### Home
![Screen Shot 2021-05-06 at 1 03 31 PM](https://user-images.githubusercontent.com/63099945/117240380-a5b88880-ae6b-11eb-8841-716ab9854ae1.png)
1. 로그인 하지 않았을 경우
  - Join, Log in 버튼 활성화
2. 로그인 했을 경우
  - Upload, Profile, Log Out 버튼 활성화 
3. 업로드 된 모든 동영상 시청 가능 

### Join
![Screen Shot 2021-05-06 at 1 12 20 PM](https://user-images.githubusercontent.com/63099945/117240968-f7154780-ae6c-11eb-97a3-bfd254805033.png)
1. 모든 빈 칸에 내용 입력해야 join 가능
2. github, facebook을 통한 join
3. join시 로그인 한 상태로 Home 화면으로 이동 

### Login 
![Screen Shot 2021-05-06 at 1 20 08 PM](https://user-images.githubusercontent.com/63099945/117241307-d0a3dc00-ae6d-11eb-83b6-baf5b6bc2364.png)
1. github, facebook을 통한 login
2. 로그인시 Home 화면으로 이동 

### Profile
![Screen Shot 2021-05-06 at 1 24 47 PM](https://user-images.githubusercontent.com/63099945/117241582-76efe180-ae6e-11eb-9f0e-5ba2bfe816d2.png)
1. Edit profile 화면으로 이동해 프로필 사진, 이름, 이메일 주소 수정 가능
2. Change Password 화면으로 이동해 비밀번호 변경 가능 
3. 사용자가 업로드한 동영상 확인 가능

### Upload
![Screen Shot 2021-05-06 at 1 32 50 PM](https://user-images.githubusercontent.com/63099945/117242115-93404e00-ae6f-11eb-815a-116cfbd40ac3.png)
1. 동영상을 촬영해 업로드 가능
2. 기존의 동영상 업로드 가능
3. title과 description 모두 입력해야 업로드 가능

### Video Detail
![Screen Shot 2021-05-06 at 1 49 14 PM](https://user-images.githubusercontent.com/63099945/117243273-e0bdba80-ae71-11eb-922b-559b78ab386c.png)
1. 홈화면에서 동영상 클릭시 Video Detail 화면으로 이동
2. 상세정보 확인 및 댓글 입력 가능 
3. 로그인한 사용자와 동영상을 올린 사용자가 일치할 경우 Edit Video 버튼 활성화
4. Edit Video 화면에서 상세정보 수정 및 동영상 삭제 가능
