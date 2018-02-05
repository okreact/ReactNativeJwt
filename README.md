# ReactNativeJwt

React Native 에서 JWT (JSON Web Tokens) 를 이용한 인증 처리 방법을 설명하는 예제 애플리케이션입니다. 애플리케이션을 실행해 보려면 먼저 **React Native** 를 설치하셔야 합니다. 그리고 Android 나 iOS 둘 중 하나는 실행 가능해야 합니다.  

이 애플리케이션에서는 Screen 관리나 토큰 관리 방법 등 실제 애플리케이션에서 필요한 여러 구성 없이 간단하게 구성했습니다. JWT 가 처리되는 방식을 이해하는데 필요한 코드만 작성하였습니다.

실행해 보려면 아래와 같이 준비해 보세요.

1. 서버 측 애플리케이션이 필요합니다. [okreact/jwt-sample-server](https://github.com/okreact/jwt-sample-server) 에 방문하셔서 안내에 따라 서버를 실행합니다.
3. ``react-native run-ios`` 혹은 ``react-native run-android`` 를 실행합니다. 테스트는 iOS 에서만 했습니다 :)

애플리케이션이 실행되면 아이디와 비밀번호를 입력합니다. ``admin``, ``tiger`` 를 입력합니다. 로그인이 성공하면 앱은 사용자 목록을 리스트 뷰로 출력합니다. 리스트 뷰는 인증이 필요하므로 직접 호출하면 ``403 Forbidden`` 오류가 발생합니다.
