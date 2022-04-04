import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { id } = request.body
      this.turnUserAdminUseCase.execute(id)
      return response.status(201).send()
    }
    catch(err) {
      return response.status(400).json({error: err})
    }
  }
}


export { TurnUserAdminController };
