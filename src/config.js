const config = {
  // apiUrl: `http://ssis.nu:4444/api`
  apiUrl:
    process.env.NODE_ENV !== 'production'
      ? `http://ssis.nu:4444/api`
      : `http://192.168.50.242:4000/api`
};
console.log(config);

export default config;
