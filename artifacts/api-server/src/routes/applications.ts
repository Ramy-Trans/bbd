import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { applicationsTable, insertApplicationSchema } from "@workspace/db/schema";
import { SubmitApplicationBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/applications", async (req, res) => {
  try {
    const body = SubmitApplicationBody.parse(req.body);

    const insertData = insertApplicationSchema.parse({
      name: body.name,
      age: body.age,
      height: body.height,
      weight: body.weight,
      goal: body.goal,
      experienceLevel: body.experienceLevel,
      whatsapp: body.whatsapp,
    });

    const [result] = await db.insert(applicationsTable).values(insertData).returning({ id: applicationsTable.id });

    res.status(201).json({
      success: true,
      message: "Application received. Mohamed will contact you soon!",
      id: result.id,
    });
  } catch (error) {
    req.log.error({ error }, "Error submitting application");
    res.status(400).json({ error: "Invalid application data" });
  }
});

router.get("/applications", async (req, res) => {
  try {
    const applications = await db.select().from(applicationsTable).orderBy(applicationsTable.createdAt);
    res.json(applications);
  } catch (error) {
    req.log.error({ error }, "Error fetching applications");
    res.status(500).json({ error: "Failed to fetch applications" });
  }
});

export default router;
