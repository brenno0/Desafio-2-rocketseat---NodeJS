import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const  { id } = request.body
    try {
      this.showUserProfileUseCase.execute(id)
      return response.status(201).send()
    }
    catch(err) {
      return response.status(400).json({error: err})
    }
  }
}

export { ShowUserProfileController };
