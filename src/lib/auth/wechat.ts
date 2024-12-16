interface WeChatAuthResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  openid: string;
  scope: string;
  nickname?: string;
  headimgurl?: string;
}

export async function getWeChatLoginUrl() {
  const state = Math.random().toString(36).substring(7);
  const redirectUri = encodeURIComponent(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/wechat/callback`);
  
  return `https://open.weixin.qq.com/connect/qrconnect?appid=${process.env.WECHAT_APP_ID}&redirect_uri=${redirectUri}&response_type=code&scope=snsapi_login&state=${state}#wechat_redirect`;
}

export async function handleWeChatCallback(code: string): Promise<WeChatAuthResponse> {
  const tokenUrl = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${process.env.WECHAT_APP_ID}&secret=${process.env.WECHAT_APP_SECRET}&code=${code}&grant_type=authorization_code`;

  const response = await fetch(tokenUrl);
  const data = await response.json();

  if (data.errcode) {
    throw new Error(`WeChat auth error: ${data.errmsg}`);
  }

  // Get user info
  const userInfoUrl = `https://api.weixin.qq.com/sns/userinfo?access_token=${data.access_token}&openid=${data.openid}`;
  const userInfoResponse = await fetch(userInfoUrl);
  const userInfo = await userInfoResponse.json();

  return {
    ...data,
    nickname: userInfo.nickname,
    headimgurl: userInfo.headimgurl,
  };
}