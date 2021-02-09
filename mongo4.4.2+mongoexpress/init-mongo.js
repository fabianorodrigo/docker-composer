db.createUser(
	{
		user: "usuario",
		pwd: "senha",
		roles:[
			{
				role: "readWrite",
				db: "main"
			}
		]
	}
)
