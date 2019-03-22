# Smart-Farm

하이브리드 웹앱 프로젝트로 이 페이지에선 프로젝트 목표를 정리 및 관리합니다.



## Back-End Plan

- [ ] 3.1.1 라즈베리파이에서의 GPIO 포트로 전달되는 데이터는 RPI-GPIO 모듈을 통해서 읽어들입니다. ( https://www.npmjs.com/package/rpi-gpio )
- [ ] 3.1.2 Database 는 Level-Hyper 모듈을 통해서 강력한 성능을 가진 Indexed DB를 Node.js에서 사용합니다. ( https://github.com/Level/level-hyper )
- [ ] 3.1.3 Database Query 는 Apollo-server를 이용해서 Level-Hyper 데이터베이스 안의 데이터를 사용할 수 있도록 쿼리 연결 Resolver를 부가적으로 구현합니다. ( https://github.com/apollographql/apollo-server )
- [ ] 3.1.4 데이터 캐싱구현은 LRU ( https://github.com/isaacs/node-lru-cache ) 모듈과 LFU ( https://github.com/calvinmetcalf/node-lfu-cache ) 모듈을 이용하여 개발합니다. 쿼리한 데이터는 클라이언트와 백엔드에 각각 캐싱합니다.
- [ ] 3.1.5 RSA 비대칭키 토큰을 운용하기 위해서 JSONWebToken 모듈을 비대칭키 토큰을 구성합니다. ( https://www.npmjs.com/package/jsonwebtoken )



## Front-End Plan

- [ ] 2.2.1 Photoshop XD 로 고정형 앱디자인을 모바일 버전과 PC 버전으로 두가지 형태로 디자인한 후 각 디자인의 프로토타입을 검토 받습니다.
- [ ] 2.2.2 Zeplin을 통해서 해당 디자인을 HTML과 CSS로 출력한 후 이러한 고정형 디자인의 Form에 들어갈 코드요소를 React JS 컴포넌트를 통해 만듭니다.
- [ ] 2.2.3 React JS 컴포넌트에서는 각 컴포넌트의 구성에 있어 필요한 데이터를 Query 할 수 있도록 Apollo Client 기반의 Graph QL 쿼리문을 작성합니다. ( https://github.com/apollographql/apollo-client )
- [ ] 2.2.4 이후 만약 해상도 가변적인 반응형 디자인이 필요한 경우 BlueprintJS를 통해서 부가적으로 구현하며 고정형 디자인과 반응형 디자인을 차후 Framer.js 코드로 반응형 앱 디자인 시안을 부가적으로 제작합니다.
- [ ] 2.2.5 만약 부가적인 어떠한 애니메이팅 디자인이 필요한 경우 framer.js 와 p5.js를 통해서 움직이는 벡터레이어 디자인을 제작합니다.



## QA Plan

- [ ] <u>5.1 Unit Test = Jest + Travis CI</u> - 모든 알고리즘 코드는 단계별로 쪼개어서 유닛 테스트를 통해 정상 작동 여부를 검증합니다. 이를 위해서 Javascript 계열 군에서의 유닛 테스트 프레임워크인 Jest를 사용하며, 이러한 유닛테스트 결과를 코드상이 아닌 직관적으로 확인할 수 있도록 Travis CI를 통해서 Travis CI 웹페이지를 통해서 매 버전의 빌드성공 & 실패 정보를 확인함으로 잘못된 버전 업데이트를 방지하고, 오류가 없는 버전의 배포를 지향합니다.
- [ ] <u>5.2 Code Coverage = Jest + Codecov.io</u> - 모든 작성된 코드는 각 분기별로 유닛 테스트를 거쳐야합니다. 작성된 코드의 모든 경우를 유닛 테스트로 작성 하는 것을 지향하기 위해서 테스팅 되고 있는 코드들이 한줄 단위로 얼마만큼 테스팅으로 검증되고 있는지를 백분율로 나타내어 검사해주는 Jest를 통해서 코드 커버리지를 확인하며, 이러한 코드커버리지 달성률을 Codecov.io를 통해서 웹상에서 확인할 수 있도록 구성합니다.



## License

Copyrightⓒ2019 by Hanbat University All rights reserved.
