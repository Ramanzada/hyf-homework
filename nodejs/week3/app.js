contactsAPIRouter.get("/", async (req, res) => {
    let query = knex.select("*").from("contacts");
  
    if ("sort" in req.query) {
      const [column, direction] = req.query.sort.split(" ");
      const allowedColumns = ["first_name", "last_name", "email", "phone"];
      const allowedDirections = ["ASC", "DESC"];
  
      if (
        allowedColumns.includes(column) &&
        allowedDirections.includes(direction.toUpperCase())
      ) {
        query = query.orderBy(column, direction);
      }
    }
  
    console.log("SQL", query.toSQL().sql);
  
    try {
      const data = await query;
      res.json({ data });
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  