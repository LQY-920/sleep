# Project Initialization Script
Write-Host "Starting development environment for sleep (小伴侣)..." -ForegroundColor Green

# Check Node.js
if (!(Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "Error: Node.js not found. Please install Node.js first." -ForegroundColor Red
    exit 1
}

Write-Host "Node.js version: $(node -v)" -ForegroundColor Cyan

# Check npm
if (!(Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Host "Error: npm not found." -ForegroundColor Red
    exit 1
}

Write-Host "npm version: $(npm -v)" -ForegroundColor Cyan

# Install dependencies if package.json exists
if (Test-Path "package.json") {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    npm install
}

# Check git status
Write-Host "`nGit Status:" -ForegroundColor Cyan
git status

Write-Host "`nEnvironment ready!" -ForegroundColor Green
Write-Host "Run 'npm run dev' to start development server" -ForegroundColor Yellow
