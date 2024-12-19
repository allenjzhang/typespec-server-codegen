Set-Location (Resolve-Path (Join-Path $PSScriptRoot '..' '..' '..'))

# Generate
Remove-Item ./petstore/clients/java/src/main -Recurse -Force
Set-Location ./petstore/spec
npx --no-install tsp compile . --emit "@typespec/http-client-java"
Set-Location ../..

Remove-Item ./todoApp/clients/java/src/main -Recurse -Force
Set-Location ./todoApp/spec
npx --no-install tsp compile . --emit "@typespec/http-client-java"
Set-Location ../..

# Build (currently require a local install of io.clientcore:core)
Set-Location ./petstore/clients/java
mvn package -DskipTests
Set-Location ../../..

Set-Location ./todoApp/clients/java
mvn package -DskipTests
Set-Location ../../..
