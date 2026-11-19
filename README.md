# 🛠 황태운 – 시스템 인프라 운영 관리자

Linux·Windows Server 운영을 바탕으로 **보안 점검·하드닝, 장애 대응, 운영 자동화**를 해 왔습니다.
구축·장애 대응·운영 개선 경험을 문제 → 조치 → 결과 중심으로 정리한 포트폴리오입니다.

> 모든 페이지의 서버명·IP·도메인·계정은 예시 값으로 바꿔 두었습니다.

---

## 🌐 사이트

| 페이지 | 주소 |
|--------|------|
| 메인 | https://hwang-taeun.github.io/ |
| 스킬 상세 | https://hwang-taeun.github.io/skill.html |
| 대표 프로젝트 | https://hwang-taeun.github.io/projects.html |
| 이력서 (PDF) | https://hwang-taeun.github.io/assets/resume.pdf |

---

## 🧑‍💻 운영 분야 스킬셋

### OS & 시스템 관리
- **Linux**: Rocky 9, RHEL, CentOS, Ubuntu / **Windows Server**: 2016, 2019, 2022, AD·Group Policy
- WSL 2, WinPE, DISM, 레지스트리 자동화 / KVM·libvirt, OpenStack VM 운영
- [네트워크 본딩 (nmcli·nmtui, active-backup·라운드로빈, 스위치 이중화)](https://hwang-taeun.github.io/skills/network-bonding/)
- [rsync 데이터 이관 (데몬 모듈, 증분 동기화, 최종 전환·검증)](https://hwang-taeun.github.io/skills/rsync-migration/)
- [사내 NTP 시간 서버 (chrony · W32Time, ntpd와 차이)](https://hwang-taeun.github.io/skills/ntp-chrony/)
- [DB 이전 (MySQL 문자셋 유지 덤프 · MS-SQL .bak 복원·고아 사용자)](https://hwang-taeun.github.io/skills/db-migration/)
- [백업 솔루션 운영 (NetVault · NetBackup 클라이언트 연동·복원)](https://hwang-taeun.github.io/skills/backup-netvault-netbackup/)

### 웹 & 네트워크 서비스
- Apache, Nginx, IIS, PHP, MariaDB, SSL 인증서 / 리버스 프록시(SSL 종료), 가상호스트
- Let's Encrypt (HTTP-01 / DNS-01, acme.sh), Cloudflare DNS API 자동화
- [DNS 레코드 정리](https://hwang-taeun.github.io/skills/dns-records/) · [SPF 메일 인증](https://hwang-taeun.github.io/skills/spf-mail-auth/)
- [사내 재귀 DNS (Unbound · Windows DNS)](https://hwang-taeun.github.io/skills/dns-resolver/)
- [Ollama 로컬 LLM 구축 및 웹 연동](https://hwang-taeun.github.io/skills/ollama/)

### 고가용성(HA) & 컨테이너
- MariaDB Galera, Pacemaker, Podman·kind (대표 프로젝트 참고)

### 보안 점검·하드닝
- KISA 기준 취약점 점검·조치 (Linux·Windows Server)
- [PAM 비밀번호 정책 (authselect, faillock)](https://hwang-taeun.github.io/skills/pam-password-policy/)
- [계정별 접속 IP 제한 (pam_access, SSH·FTP)](https://hwang-taeun.github.io/skills/pam-access/)
- [방화벽·IPS 정책 운영 (Palo Alto · SRX · Snort)](https://hwang-taeun.github.io/skills/firewall-ips/)
- [Coraza + Caddy WAF (ModSecurity 대안)](https://hwang-taeun.github.io/skills/coraza-caddy-waf/)
- 로그 파일 권한 최소화, RDP 세션 타임아웃 (레지스트리/GPO)

### 로그 모니터링·알림
- rsyslog, logrotate, Windows 이벤트 전달(WEF), ELK
- RDP 접근 감지 → 문자 알림 (PowerShell)

### 장애 대응
- [Linux 장애 처리 (부팅·파일시스템·서비스)](https://hwang-taeun.github.io/skills/linux-troubleshooting/)
- [RAID Write Back 캐시로 인한 /boot 손상 복구](https://hwang-taeun.github.io/skills/raid-boot-recovery/)

### 자동화 스크립트
- Bash(백업, 로그 순환, 서비스·포트 점검), PowerShell(이벤트 감시, 시간 동기화), Python
- rsync, inotify, systemd 타이머, crontab
- [Ansible 서버 자동화](https://hwang-taeun.github.io/skills/ansible/) · [프라이빗 Git 서버 (Apache Smart HTTP)](https://hwang-taeun.github.io/skills/git-server/)

---

## 📦 대표 프로젝트

| 프로젝트 | 설명 |
|----------|------|
| [중앙 로그 서버 구축](https://hwang-taeun.github.io/projects/log-server/) | rsyslog + Windows 이벤트 수집기로 호스트·로그별 일자 파일 보관 |
| [폐쇄망 Windows 패치 서버](https://hwang-taeun.github.io/projects/wsus-offline/) | WSUS export/import 반입, 허용 클라이언트 제한, 그룹별 승인 |
| [서버 장애 SMS 알림](https://hwang-taeun.github.io/projects/server-alert/) | bash 점검 + ELK 중앙 감시 → 알리고/textbee 문자 알림 |
| [홈서버 구축](https://hwang-taeun.github.io/projects/home-server/) | Cloudflare DNS API DDNS, acme.sh DNS-01로 Synology 인증서 무인 갱신 |
| [채용공고 모니터링 크롤러](https://hwang-taeun.github.io/projects/recruit-crawler/) | mitmproxy로 내부 API 분석·재현, 신규 공고만 메일 알림 |
| [SSL 리버스 프록시](https://hwang-taeun.github.io/projects/ssl-proxy/) | SSL 종료·재암호화·로드밸런싱으로 백엔드 단순화 |
| [ModSecurity WAF 차단 페이지](https://hwang-taeun.github.io/projects/modsecurity-waf/) | 차단 안내 페이지와 감사 로그 연동 |
| [GeoIP 국가 접근 제어](https://hwang-taeun.github.io/projects/geoip-block/) | ModSecurity GeoIP로 국가 단위 차단 |
| [AbuseIPDB 기반 악성 IP 차단](https://hwang-taeun.github.io/projects/abuseipdb/) | API로 악성 IP 수집 후 Apache 규칙 자동 갱신 |
| [중앙 인증 (SSSD + LDAP/AD + RADIUS)](https://hwang-taeun.github.io/projects/central-auth/) | 서버별 로컬 계정 대신 중앙 계정으로 SSH 통합 |
| [MariaDB Galera HA](https://hwang-taeun.github.io/projects/galera-ha/) | Active-Active DB 이중화 |
| [Pacemaker 웹 HA](https://hwang-taeun.github.io/projects/pacemaker-ha/) | Pacemaker + httpd 장애 조치 |
| [Podman · Kubernetes HA](https://hwang-taeun.github.io/projects/podman-kind/) | Podman 컨테이너와 kind 기반 HA 실습 |
| [CI/CD 배포 자동화](https://hwang-taeun.github.io/projects/cicd-polling/) | 접근제어 환경에서 Gitea + Polling Agent 배포 |
| [침해사고 메모리 분석](https://hwang-taeun.github.io/projects/memory-forensics/) | IIS 웹 서버 메모리 덤프 분석 |

전체 목록은 [대표 프로젝트](https://hwang-taeun.github.io/projects.html) 페이지에서 볼 수 있습니다.

---

## 📂 저장소 구조

```text
├── index.html          # 메인 (대표 프로젝트 자동 표시)
├── skill.html          # 스킬 목록 (skills/·projects/ 머리말에서 자동 생성)
├── projects.html       # 프로젝트 목록 (projects/ 머리말에서 자동 생성)
├── assets/
│   ├── style.css       # 공통 스타일
│   └── resume.pdf      # 이력서
├── skills/
│   └── <주제>/
│       ├── index.html  # 머리말: title, skill_group, skill_order, skill
│       └── images/
└── projects/
    └── <주제>/
        ├── index.html  # 머리말: type: project, title, order, featured, summary, problem, action, result
        └── images/
```

### 페이지 추가 방법
1. `skills/<주제>/` 또는 `projects/<주제>/` 폴더에 `index.html`과 `images/`를 넣습니다.
2. `index.html` 맨 위 머리말(Front Matter)에 그룹·순서·요약을 적습니다.
3. push 하면 GitHub Pages(Jekyll)가 `skill.html`, `projects.html`, 메인 목록을 자동으로 다시 만듭니다.

### 로컬 미리보기
```bash
bundle exec jekyll serve      # http://127.0.0.1:4000
```
머리말과 자동 목록은 Jekyll이 처리하므로, `index.html`을 파일로 직접 열면 머리말이 그대로 보입니다.