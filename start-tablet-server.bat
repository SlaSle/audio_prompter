@echo off
setlocal
cd /d "%~dp0"
set PORT=8080
echo AudioPrompter
echo.
echo Uruchamiam serwer dla tabletu na porcie %PORT%.
echo Komputer i tablet musza byc w tej samej sieci Wi-Fi.
echo.
echo Adresy tego komputera:
ipconfig | findstr /R /C:"IPv4"
echo.
echo Na tablecie wpisz w przegladarce:
echo http://ADRES_IP_KOMPUTERA:%PORT%
echo.
echo Aby zatrzymac, zamknij to okno.
python -m http.server %PORT% --bind 0.0.0.0
pause
