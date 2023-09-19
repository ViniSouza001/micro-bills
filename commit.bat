set filedatetime=%date%
set horaAtual= %time:~0,8%

git add .
git commit -m "Ultima alteracao: "%filedatetime%" -  "%horaAtual%" "
git push