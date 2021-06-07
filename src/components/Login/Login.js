import React from "react";
import { Container, CTA, CtaLogoOne, CtaLogoTwo, Description, SignUp } from "./loginStyles";

function Login() {
  return (
    <Container>
      <CTA>
        <CtaLogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          An intuitive Git-based workflow and powerful serverless platform to
          build, deploy, and collaborate on web apps
        </Description>
        <CtaLogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;
