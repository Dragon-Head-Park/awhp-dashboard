@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ================================
echo   GitHub 연결 (최초 1회만 실행)
echo ================================
echo.
echo [1/6] 손상된 빈 .git 폴더 정리...
if exist ".git" rmdir /s /q ".git"
echo [2/6] git 저장소 초기화 (main 브랜치)...
git init -b main
echo [3/6] 사용자 정보 설정...
git config user.name "Dragon-Head-Park"
git config user.email "qkrenfyd@gmail.com"
echo [4/6] GitHub 원격 저장소 연결...
git remote add origin https://github.com/Dragon-Head-Park/awhp-dashboard.git
echo [5/6] 원격 내용 가져오기...
git fetch origin
echo [6/6] 로컬을 원격과 동기화...
git reset --hard origin/main
git branch --set-upstream-to=origin/main main
echo.
echo ====== 아래에 origin 주소가 보이면 연결 성공! ======
git remote -v
echo.
echo 다음부터는 data.js 등을 고친 뒤 "2_git업로드.bat" 을 더블클릭하세요.
pause
