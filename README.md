# comp410-frontend-toy-project

## Click Run -> Run Without Debugging to run the program.

If you have this issue: The ASP.NET Core developer certificate is in an invalid state. 

Do this:

To fix this issue, run the following commands 'dotnet dev-certs https --clean' and 'dotnet dev-certs https' to remove all existing ASP.NET Core development certificates and create a new untrusted developer certificate. On macOS or Windows, use 'dotnet dev-certs https --trust' to trust the new certificate.
