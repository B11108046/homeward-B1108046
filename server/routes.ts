import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import { insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form API endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate input with zod schema
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store contact message in database
      const result = await storage.createContactMessage(validatedData);
      
      return res.status(200).json({ 
        success: true, 
        message: 'Contact message received',
        data: result
      });
    } catch (error) {
      console.error('Error processing contact form:', error);
      
      // Handle validation errors specifically
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          message: 'Validation error',
          errors: error.errors
        });
      }
      
      return res.status(500).json({ 
        message: 'An error occurred while processing your request'
      });
    }
  });
  
  // Get all contact messages (admin endpoint)
  app.get('/api/contact', async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      return res.status(200).json(messages);
    } catch (error) {
      console.error('Error retrieving contact messages:', error);
      return res.status(500).json({
        message: 'An error occurred while retrieving contact messages'
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
