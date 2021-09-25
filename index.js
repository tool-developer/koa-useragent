import UserAgent from '@tool-developer/wo-useragent';
//
module.exports =  async (ctx, next) => {
  const req = ctx.request;
  //
  if (ctx.useragent) {

    return await next();
  }
  //
  const agent = req.headers['user-agent'] || '';
  const ua = new UserAgent(agent);
  //
  ctx.useragent = ua;
  ctx.state.ua = ua;
  //
  return await next();
};