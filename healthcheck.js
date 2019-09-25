//health check for the container
app.use('/health', (req, res) => {
  res.status(200).json({status: 'pass'})
});
