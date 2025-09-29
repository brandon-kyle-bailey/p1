export enum WebRoutes {
  EmailVerification = "/email-verification",
  Login = "/login",
  Register = "/register",
  ResetPassword = "/reset-password",
  Dashboard = "/dashboard",
  Blog = "/blog",
  Contact = "/contact",
  PrivacyPolicy = "/privacy-policy",
  Tos = "/terms-of-service",
  Home = "/",
  Demo = "/demo",
  Account = "/account",
  Apps = "/apps",
  Devices = "/devices",
  Workspaces = "/workspaces",
}

export enum ApiRoutes {
  BillingCheckoutSession = "/api/billing/checkout-session",
  BillingWebhook = "/api/billing/webhook",
}

export enum AuthProviders {
  Credentials = "credentials",
  Github = "github",
  Google = "google",
}

export enum SignInModes {
  Login = "login",
  Register = "register",
}

export interface SignInActionOptions {
  redirect: boolean;
  mode?: SignInModes;
  redirectTo?: WebRoutes;
}

export enum StripeWebhookEvents {
  PaymentMethodAttached = "payment_method.attached",
  CustomerCreated = "customer.created",
  CustomerUpdated = "customer.updated",
  CustomerSubscriptionCreated = "customer.subscription.created",
  CheckoutSessionCompleted = "checkout.session.completed",
  SetupIntentCreated = "setup_intent.created",
  SetupIntentSuccesseded = "setup_intent.succeeded",
  InvoiceCreated = "invoice.created",
  InvoiceFinalized = "invoice.finalized",
  InvoicePaid = "invoice.paid",
  InvoicePaymentFailed = "invoice.payment_failed",
  InvoicePaymentSucceeded = "invoice.payment_succeeded",
}

export enum Cookies {
  SidebarState = "sidebar_state",
}
