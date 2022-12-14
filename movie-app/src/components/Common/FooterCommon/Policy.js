import React from "react";
import "../css/policy.scss";
import Footer from "../Footer";
import { motion, useScroll } from "framer-motion";
import Top from "../top";
import Header from "../header";

function Policy() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Header></Header>
      <div className="Policy-title">
        <div>
          <p>
            Npm는 인터넷 연결 지원 TV, 컴퓨터 및 기타 디바이스('Npm 지원
            디바이스')에서 인터넷을 통해 회원에게 엔터테인먼트 콘텐츠('Npm
            콘텐츠')를 제공하는 맞춤형 구독 서비스입니다.
          </p>
          <p>
            본 이용 약관은 사용자가 Npm 서비스를 이용하는 데 적용됩니다. 본 이용
            약관에 언급되는 'Npm 서비스' 또는 '당사 서비스'는 모든 특성과 기능,
            추천 콘텐츠와 후기, Npm 웹사이트 및 사용자 인터페이스뿐만 아니라 Npm
            서비스와 관련된 모든 콘텐츠와 소프트웨어를 포함하는 Npm 콘텐츠의
            검색 및 이용을 위해 Npm가 제공하는 개인 맞춤형 서비스를 의미합니다.
          </p>
          <h3>1. 멤버십</h3>
          <p>
            1.1. Npm 멤버십은 해지 시까지 지속됩니다. Npm 서비스를 이용하려면
            인터넷 액세스 및 Npm 지원 디바이스가 필요하며 Npm에 하나 이상의 결제
            수단을 제공해야 합니다. '결제 수단'이란 현재 유효한 승인된 결제
            수단으로서, 필요시 업데이트될 수 있으며 타사 계정을 통한 결제를
            포함할 수 있습니다. 결제일 전까지 멤버십을 해지하지 않을 경우, 다음
            결제 주기의 멤버십 요금이 회원의 결제 수단으로 청구됩니다(아래
            '해지' 내용 참조).
          </p>
          <p>
            1.2. Npm는 특별 프로모션 멤버십이나 타사가 자체 제품 및 서비스
            공급과 연계하여 제공하는 멤버십 등 다양한 멤버십을 제공할 수
            있습니다. 일부 멤버십에는 상이한 조건 및 제약이 있으며, 이는 가입 시
            또는 회원이 사용할 수 있는 기타 커뮤니케이션을 통해 공개됩니다.
            회원의 Npm 멤버십과 관련된 세부 사항은 Npm.com 웹사이트를 방문하여
            페이지 상단의 프로필 이름 아래에 위치한 '계정' 링크를 클릭하면
            확인할 수 있습니다.
          </p>
        </div>
        <div>
          <h3>2. 프로모션</h3>
          <p>
            Npm에서 특별 프로모션 또는 프로모션 멤버십('프로모션')을 제공하는
            경우가 있습니다. 프로모션 이용 자격은 Npm의 단독 재량에 따라
            결정되며, Npm는 회원이 해당 자격을 갖추지 않은 것으로 확인될 경우
            프로모션 제공을 철회하고 계정을 보류 조치할 권리를 보유합니다. 기존
            Npm 멤버십을 보유하고 있거나 최근에 가입한 가구의 구성원에게는 특정
            신규 프로모션의 이용 자격이 주어지지 않을 수도 있습니다. Npm는
            기존에 사용 중이거나 최근 가입 시 사용한 디바이스 ID, 결제의 수단,
            계정 이메일 주소 등과 같은 정보를 프로모션 이용 자격 판단에 활용할
            수 있습니다. 자격 요건 및 기타 제한 사항과 조건은 프로모션 신청 시
            또는 회원이 사용할 수 있는 기타 커뮤니케이션을 통해 공개됩니다.
          </p>
        </div>
        <div>
          <h3>3. 결제 및 해지</h3>
          <p>
            3.1. 결제 주기. Npm 서비스 멤버십 요금과 서비스 이용과 관련해
            발생하는 기타 청구 금액(예: 세금, 거래 수수료 등)은 '계정' 페이지에
            표시된 결제일에 등록된 결제 수단으로 청구됩니다. 결제 주기는 회원이
            Npm 가입 시 선택한 멤버십 유형에 따라 결정됩니다. 등록된 결제 수단이
            정상적으로 처리되지 않거나, 특정 월에 존재하지 않는 날짜에 유료
            멤버십이 시작된 경우이거나, 회원이 멤버십 유형을 변경하는 경우 등의
            일부 상황에서는 요금 결제일이 변경될 수 있습니다. Npm.com 웹사이트로
            이동하여 '계정' 페이지의 '결제 상세 정보' 링크를 클릭하면 다음
            결제일을 확인할 수 있습니다. 타사 계정을 결제 수단으로 사용하여
            Npm에 가입한 경우에는, 해당 타사 계정에서 회원의 Npm 멤버십 결제
            정보를 확인할 수 있습니다.
          </p>
          <p>
            3.2. 결제 수단. Npm 서비스를 이용하려면 하나 이상의 결제 수단을
            제공해야 합니다. 미결제 금액에 대한 책임은 회원에게 있습니다.
            유효기간 만료, 잔고 부족 등 사유로 결제가 정상적으로 처리되지
            않았는데도 회원이 계정을 해지하지 않는 경우, 유효한 결제 수단에
            청구가 완료될 때까지 회원의 서비스 이용이 제한될 수 있습니다. 일부
            결제 수단의 경우, 발급자가 회원에게 해외 거래 수수료나 기타 결제
            수단 처리 관련 수수료 등의 수수료를 청구할 수 있습니다. 현지 세금은
            사용된 결제 수단에 따라 달라질 수 있습니다. 자세한 사항은 결제 수단
            서비스 제공업체를 통해 확인하시기 바랍니다.
          </p>
          <p>
            3.3. 결제 수단 업데이트. 회원은 '계정' 페이지로 이동하여 결제 수단을
            업데이트할 수 있습니다. Npm에서도 해당 결제 서비스 제공업체에서
            제공하는 정보를 이용하여 회원의 결제 수단을 업데이트할 수 있습니다.
            업데이트를 하는 경우, 회원은 Npm가 해당 결제 수단으로 계속 청구하는
            것을 승인하는 것입니다. 회원은 기본 결제 수단이 거부되거나 가입 요금
            결제에 더 이상 사용될 수 없는 경우, Npm가 회원의 계정에 연결된 다른
            결제 수단으로 청구하는 것을 승인합니다.
          </p>
          <p>
            3.4. 해지. 회원은 언제라도 Npm 멤버십을 해지할 수 있으며, 이 경우
            결제 주기가 종료될 때까지는 Npm 서비스를 계속 이용할 수 있습니다. 본
            약관 3.5.에서 정한 요건을 충족하는 해지와 Npm의 고의 또는 과실을
            이유로 한 환불 의무를 제외하고, 멤버십을 이용하지 않은 기간이나
            이용하지 않은 Npm 콘텐츠에 대한 환불 또는 크레딧은 제공되지
            않습니다. 멤버십을 해지하려면 '계정' 페이지로 이동하여 해지 관련
            안내를 따르시기 바랍니다. 멤버십을 해지하는 경우, 계정은 현재 결제
            주기가 종료될 때 자동으로 종료됩니다. 다만, 본 약관 3.5.에 따라
            해지를 요청한 경우, 계정은 즉시 종료됩니다. 계정이 종료되는 시점은
            '계정' 페이지에서 '결제 상세 정보'를 클릭하면 확인할 수 있습니다.
            회원이 타사 계정을 결제 수단으로 사용하여 Npm에 가입한 경우, 계정을
            해지하려면 (예를 들어, 해당 타사 계정에 접속해 자동 갱신을
            해제하거나 해당 타사를 통해 Npm 서비스 멤버십을 해지하는 등) 해당
            타사를 통해서 해지해야 할 수도 있습니다.
          </p>
          <p>
            3.5. 환불 요청. 회원이 결제일로부터 7일 이내에 계정을 통해 Npm
            멤버십을 해지하고 그 동안 해당 계정으로 Npm 콘텐츠를 이용하지 않는
            경우, 회원은 해당 결제 주기에 청구된 멤버십 요금을 전액 환불 요청할
            수 있습니다.
          </p>
          <p>
            3.6. 요금 및 멤버십 변경. Npm는 서비스 요금 및 멤버십을 변경할 수
            있습니다. Npm는 서비스 요금 및 멤버십의 변경에 대하여 적용 시기 등을
            포함하여 회원에게 통지하여 동의를 받습니다. 회원은 해당 변경에
            동의하지 않는 경우 Npm 멤버십을 해지할 수 있습니다.
          </p>
        </div>
        <div>
          <h3>4. Npm 서비스</h3>
          <p>
            4.1. Npm 서비스의 회원이 되려면 최소 만 19세여야 합니다. 미성년자의
            경우 성인의 감독하에서만 서비스를 이용할 수 있습니다.
          </p>
          <p>
            4.2. Npm 서비스와 이 서비스를 통해 이용하는 모든 콘텐츠는 개인적,
            비상업적 용도로만 사용해야 하며, 가구 구성원이 아닌 개인과
            공유해서는 안 됩니다. Npm 멤버십 가입 기간 동안 Npm는 회원에게 Npm
            서비스 및 Npm 콘텐츠를 이용할 수 있는 제한적이고 비독점적이며 양도
            불가능한 권한을 부여합니다. 앞서 언급한 권한을 제외하고는 어떠한
            권리, 소유권 또는 이권도 회원에게 이전되지 않습니다. 또한 회원은
            대중 공연을 목적으로 Npm 서비스를 이용해서도 안 됩니다.
          </p>
          <p>
            4.3. 회원은 일차적으로 계정을 생성한 국가 내에서 그리고 Npm가
            멤버십을 제공하고 Npm 콘텐츠에 대한 라이선스를 허용한 지역 내에서만
            해당 콘텐츠를 이용할 수 있습니다. 이용 가능한 콘텐츠는 지역에 따라
            다르며 수시로 변경될 수 있습니다. 광고 지원 멤버십에서는 일부
            콘텐츠가 제공되지 않을 수 있습니다.
          </p>
          <p>
            4.4. 회원이 동시에 시청 가능한 디바이스의 수는 회원이 선택한
            멤버십에 따라 결정되며 '계정' 페이지에서 확인할 수 있습니다. 콘텐츠
            라이브러리를 비롯한 Npm 서비스는 정기적으로 업데이트됩니다. 또한,
            Npm는 웹사이트, 사용자 인터페이스, 프로모션 혜택, Npm 콘텐츠의 이용
            가능 여부 등 서비스의 다양한 측면에 대한 테스트를 지속적으로
            실시합니다. 회원은 언제든지 '계정' 페이지의 'Npm 테스터로 참여'
            설정을 변경하여 테스트 참여 옵션을 끌 수 있습니다.
          </p>
          <p>
            4.5. 멤버십에 따라 일부 Npm 콘텐츠는 지원되는 특정 디바이스에서
            일시적으로 저장해 오프라인으로 시청할 수 있습니다('오프라인
            콘텐츠'). 단, 계정당 허용되는 오프라인 콘텐츠 수, 오프라인 콘텐츠를
            저장할 수 있는 디바이스의 최대 수, 오프라인 콘텐츠 시청을 시작해야
            하는 기간, 오프라인 콘텐츠를 이용할 수 있는 기간 등에 제약이
            따릅니다. 일부 오프라인 콘텐츠는 특정 국가에서 재생할 수 없습니다.
            이러한 오프라인 콘텐츠를 스트리밍할 수 없는 국가에서 온라인으로
            접속한 경우, 해당 국가에 체류하는 동안에는 해당 오프라인 콘텐츠를
            재생할 수 없습니다.
          </p>
          <p>
            4.6. 회원은 모든 관련 법률, 규칙, 규정 또는 Npm 서비스 및 콘텐츠
            사용과 관련된 기타 제한에 따라 Npm 서비스(Npm 서비스 내의 모든
            기능을 포함)를 이용하는 데 동의합니다. 본 이용 약관에서 명시적으로
            허용한 경우를 제외하고 회원은 다음의 행위를 하지 않는 데 동의합니다.
          </p>

          <h4>
            (i) Npm 서비스에 포함되어 있거나 Npm 서비스를 통해 획득한 콘텐츠와
            정보를 아카이브, 복제, 배포, 수정, 전시, 시연, 출판, 라이선스, 2차적
            저작물로 생성, 판매 권유 또는 이용(본 이용 약관에 명시적으로 허용된
            경우 제외)
          </h4>
          <h4>
            그래픽 사용자 인터페이스, 광고 또는 광고 기능, 저작권 고지 및 상표를
            포함한 Npm 서비스 내 콘텐츠 보호 기능 또는 기타 요소를 우회, 삭제,
            수정, 무효화, 약화, 차단, 가림 또는 훼손
          </h4>
          <h4>
            (iii) Npm 서비스에 접근하는 데 로봇, 스파이더, 스크레이퍼 또는 기타
            자동화 수단 이용
          </h4>
          <h4>
            (iv) Npm 서비스를 통해 접근 가능한 소프트웨어 또는 기타 제품,
            프로세스를 역컴파일, 리버스 엔지니어링 또는 역어셈블
          </h4>
          <h4>
            (v) 코드나 제품을 삽입하거나 어떤 방식으로든 Npm 서비스 콘텐츠 조작
          </h4>
          <h4>(vi) 데이터 마이닝, 데이터 수집 또는 추출 방법 사용</h4>
          <h4>
            (vii) 소프트웨어 바이러스나 기타 컴퓨터 코드, 파일이나 프로그램을
            포함하여, Npm 서비스와 관련된 컴퓨터 소프트웨어나 하드웨어 또는 통신
            장비의 기능을 방해, 파괴 또는 제한하기 위해 설계된 자료를 업로드,
            게시, 이메일 전송, 또는 다른 방식으로 발송, 전송
          </h4>
          <p>
            회원이 본 이용 약관의 4.1, 4.2, 4.3 또는 4.5조를 위반하거나
            불법복제, 명의도용, 신용카드 부정 사용, 기타 이에 준하는 사기행위
            또는 불법행위에 가담하는 경우, Npm는 회원의 서비스 사용을
            종료시키거나 제한할 수 있습니다.
          </p>
          <p>
            4.7. Npm 콘텐츠의 화면 품질은 디바이스에 따라 달라질 수 있으며 지역,
            사용 가능한 인터넷 대역폭이나 인터넷 접속 속도 등 다양한 요인의
            영향을 받을 수 있습니다. HD, UHD 및 HDR의 이용 가능 여부는 사용 중인
            인터넷 서비스 및 디바이스 성능에 따라 결정됩니다. 모든 콘텐츠가 HD,
            UHD, HDR 등 모든 화질로 제공되는 것은 아니며, 모든 멤버십에서 모든
            화질로 콘텐츠를 이용할 수 있는 것은 아닙니다. 모바일 네트워크 사용
            시, 기본 재생 설정에서 HD, UHD 및 HDR 콘텐츠는 제외됩니다. SD 품질을
            유지하기 위한 최소 연결 속도는 1.0Mbps이나, 양호한 영상 품질을
            위해서는 더 높은 속도를 권장합니다. HD 콘텐츠(720p 이상의 해상도)를
            수신하기 위한 권장 다운로드 속도는 스트리밍당 3.0Mbps 이상입니다.
            UHD 콘텐츠(4K 이상의 해상도)를 수신하기 위한 권장 다운로드 속도는
            스트리밍당 15.0Mbps 이상입니다. 모든 인터넷 접속 요금은 사용자
            부담입니다. 부과될 수 있는 인터넷 데이터 이용 요금에 대한 세부사항은
            인터넷 서비스 제공업체에 확인하시기 바랍니다. Npm 콘텐츠 시청을
            시작하는 데 소요되는 시간은 지역, 해당 시점에 사용 가능한 인터넷
            대역폭, 선택한 콘텐츠, Npm 지원 디바이스의 설정 등 다양한 요인에
            따라 달라질 수 있습니다.
          </p>
          <p>
            4.8. Npm 소프트웨어는 Npm에 의해 자체 사용 목적으로 개발되었으며,
            Npm 지원 디바이스를 이용해 Npm로부터의 콘텐츠를 합법적으로
            스트리밍하고 이용하는 용도로만 사용할 수 있습니다. Npm 소프트웨어는
            디바이스와 매체별로 달라질 수 있으며, 기능도 디바이스마다 다를 수
            있습니다. 회원은 Npm 서비스 이용을 위해 타사 라이선스 계약의 대상인
            타사 소프트웨어가 필요할 수 있음을 인지합니다. 회원은 Npm
            소프트웨어와 관련 타사 소프트웨어의 업데이트된 버전을 자동으로
            다운로드하는 데에 동의합니다.
          </p>
        </div>
        <div>
          <h3>5. 비밀번호 및 계정 액세스.</h3>
          <p>
            Npm 계정을 생성하여 본인의 등록 결제 수단에 요금이 청구되는
            회원(이하 '계정 소유자')은 Npm 계정 사용으로 인한 모든 활동에 대해
            책임이 있습니다. 계정해킹, 명의도용, 신용카드 부정사용이나 기타 이에
            준하는 사기행위 또는 불법행위로부터 회원 및 Npm 등을 보호하기 위해
            Npm는 회원 계정을 종료하거나 보류 조치를 취할 수 있습니다.
          </p>
        </div>
        <div>
          <h3>6. 보증 및 책임의 제한.</h3>
          <p>
            Npm는 안정적인 서비스 제공을 위해 노력합니다. 다만, Npm의 책임 없이
            서비스 중단이나 오류가 발생할 수 있습니다. Npm는 고의 또는 과실로
            인하여 회원이 입은 손해를 배상하되, 특별한 사정으로 통상적인 범위를
            벗어나는 손해는 Npm의 고의 또는 중대한 과실을 제외하고는 책임지지
            않습니다. 멤버십에 따라 Npm 서비스에 타사 광고가 표시될 수 있습니다.
            Npm는 광고주, 광고 대상 제품 또는 서비스를 보증하거나 후원하지
            않으며, 인터랙티브 광고 참여를 포함하여 광고주와의 모든 상호 작용은
            회원 본인이 자신의 선택에 따라 책임을 부담합니다.
          </p>
        </div>
        <div>
          <h3>7. 기타</h3>
          <h4>
            7.1. 준거법. 본 이용 약관은 대한민국 법률의 적용을 받고 그에 따라
            해석됩니다.
          </h4>
          <h4>
            7.2. 불원 자료. Npm는 Npm 콘텐츠와 관련된 불원 자료 또는 아이디어를
            인정하지 않으며, Npm 콘텐츠 또는 다른 미디어상의 프로그램과 Npm에
            전송된 자료 또는 아이디어의 유사성에 대해 책임지지 않습니다.
          </h4>
          <h4>
            7.3. 고객 센터. Npm 서비스 및 기능에 대한 자세한 정보를 확인하고자
            하거나 계정과 관련하여 도움이 필요한 경우, Npm 고객 센터(Npm.com
            웹사이트를 통해 접속 가능)를 방문하시기 바랍니다. 특정 상황에서는
            회원의 컴퓨터에 대한 전체 액세스 권한을 고객 센터에 제공하는 원격
            액세스 지원 도구를 사용하여 회원을 지원하는 것이 최선일 수 있습니다.
            이러한 액세스 권한을 제공하기를 원하지 않는 경우, 원격 액세스 도구를
            통한 지원에 동의하지 않으시면 됩니다. 이 경우 고객 센터에서는 다른
            수단을 사용해서 지원 서비스를 제공합니다. 본 이용 약관과 고객 센터
            또는 Npm 웹사이트 내 다른 부분에서 제공되는 내용 사이에 불일치가
            존재하는 경우, 본 이용 약관이 우선적으로 적용됩니다.
          </h4>
          <h4>
            7.4. 이용 약관의 변경 및 양도. Npm는 수시로 본 이용 약관을 변경할 수
            있습니다. Npm는 변경 사항이 적용되기 최소 30일 이전에 관련 내용을
            회원에게 통지합니다. Npm는 회원과의 계약(관련 권리 및 의무 포함)을
            관련 법률에서 정한 절차에 따라 양도 또는 이전할 수 있으며, 회원은
            이에 동의하지 않는 경우 언제라도 Npm 멤버십을 해지할 수 있습니다.
          </h4>
          <h4>
            7.5. 전자적 커뮤니케이션. Npm는 회원 계정과 관련한 정보(예: 결제
            승인, 청구서, 비밀번호 또는 결제 수단 변경, 확인 메시지, 공지)를
            회원이 등록 당시 기재한 이메일 주소로 이메일을 전송하는 등의 전자적
            형태로만 통지합니다.
          </h4>
        </div>
        <div>
          <h4>마지막 업데이트: 2022년 12월 15일</h4>
        </div>
      </div>
      <Top></Top>
      <Footer></Footer>
    </>
  );
}

export default Policy;
