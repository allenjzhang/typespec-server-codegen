Set-Location (Resolve-Path (Join-Path $PSScriptRoot '..' '..' '..'))

Remove-Item ./petstore/clients/java/src/main -Recurse -Force
Set-Location ./petstore/spec
npx --no-install tsp compile . --emit "@typespec/http-client-java"
Set-Location ../..

Remove-Item ./todoApp/clients/java/src/main -Recurse -Force
Set-Location ./todoApp/spec
npx --no-install tsp compile . --emit "@typespec/http-client-java"
Set-Location ../..
