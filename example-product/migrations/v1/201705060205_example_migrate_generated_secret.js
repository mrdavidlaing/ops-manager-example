exports.migrate = function(input) {
  // To view JavaScript console logs in the Rails debug log, be sure to make them single value and to only pass them
  // strings.  JSON.stringify is an easy way to dump a structure.
  console.log('the properties passed to migrate are: ');
  console.log(JSON.stringify(input));
  input.variable_migrations.push({
    from: input.properties['.web_server.generated_secret'],
    to_variable: 'generated-secret-name-to-migrate-to-credhub'
  });
  return input;
};
