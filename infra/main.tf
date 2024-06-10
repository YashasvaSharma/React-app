provider "aws" {
  region     = var.aws_region
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
  token      = var.aws_session_token
}

resource "aws_ecr_repository" "ecr_repo" {
  name                 = "frontend_repo"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }
}