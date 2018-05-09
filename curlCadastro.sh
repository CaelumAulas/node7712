#Cadsatro enviando JSON
curl -X POST -d '{"titulo": "Andrad", "preco":50}' -H "Accept:application/json" -H "Content-Type:application/json" http://localhost:3000/produtos