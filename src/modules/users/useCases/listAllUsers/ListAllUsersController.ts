import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try{
      const { id } = request.body;
      this.listAllUsersUseCase.execute(id)
      return response.status(201).send()
    }
    catch(err) {
      return response.status(400).json({error: err})
    }
    
  }
}

export { ListAllUsersController };
