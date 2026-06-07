@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ================================
echo   변경사항 업로드 + 사이트 갱신
echo ================================
echo.
git add -A
git commit -m "데이터 업데이트"
echo.
echo GitHub에 올리는 중... (최초 1회는 로그인 창이 뜹니다)
git push
echo.
echo ====== 완료! 1~2분 뒤 아래 사이트에 반영됩니다 ======
echo https://dragon-head-park.github.io/awhp-dashboard/
pause
