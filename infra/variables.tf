variable "aws_region" {
  description = "The AWS region to deploy resources."
  type        = string
  default     = "us-east-1"
}

variable "aws_access_key" {
  description = "AWS Access Key"
  type        = string
  sensitive   = true
}

variable "aws_secret_key" {
  description = "AWS Secret Key"
  type        = string
  sensitive   = true
}

variable "aws_session_token" {
  description = "AWS Session Token"
  type        = string
  sensitive   = true
  default     = null
}

variable "ecr_repository_name" {
  description = "The name of the ECR repository"
  type        = string
  default     = "frontend_repo"
}