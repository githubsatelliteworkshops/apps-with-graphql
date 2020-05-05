function invokesCommand(name, body) {
  const matcher = /^\/([\w]+)\b *(.*)?$/m;
  const command = body.match(matcher);

  return command && name === command[1];
}

module.exports = invokesCommand;
