package com.amaliacocina.gestion.recetas.config;

//@Configuration
//@EnableTransactionManagement
public class PersistenceJPAConfig{
 
//   @Bean
//   public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
//      LocalContainerEntityManagerFactoryBean em 
//        = new LocalContainerEntityManagerFactoryBean();
//      em.setDataSource(dataSource());
//      em.setPackagesToScan(new String[] { "com.amaliacocina.recipes.model" });
// 
//      JpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
//      em.setJpaVendorAdapter(vendorAdapter);
//      em.setJpaProperties(additionalProperties());
// 
//      return em;
//   }
// 
////   @Bean
////   public DataSource dataSource(){
////      DriverManagerDataSource dataSource = new DriverManagerDataSource();
////      dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
////      dataSource.setUrl("jdbc:mysql://localhost:3306/spring_jpa");
////      dataSource.setUsername( "tutorialuser" );
////      dataSource.setPassword( "tutorialmy5ql" );
////      return dataSource;
////   }
// 
//   @Bean
//   public PlatformTransactionManager transactionManager(
//     EntityManagerFactory emf){
//       JpaTransactionManager transactionManager = new JpaTransactionManager();
//       transactionManager.setEntityManagerFactory(emf);
// 
//       return transactionManager;
//   }
// 
//   @Bean
//   public PersistenceExceptionTranslationPostProcessor exceptionTranslation(){
//       return new PersistenceExceptionTranslationPostProcessor();
//   }
// 
//   Properties additionalProperties() {
//       Properties properties = new Properties();
////       properties.setProperty("hibernate.hbm2ddl.auto", "create-drop");
////       properties.setProperty(
////         "hibernate.dialect", "org.hibernate.dialect.MySQL5Dialect");
//        
//       return properties;
//   }
}