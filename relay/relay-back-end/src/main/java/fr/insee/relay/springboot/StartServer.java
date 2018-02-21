package fr.insee.relay.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.solr.SolrAutoConfiguration;

@SpringBootApplication(scanBasePackages = { "fr.insee.relay" }, exclude = { SolrAutoConfiguration.class })
public class StartServer {

	public static void main(String[] args) {
		// System.setProperty(AbstractEnvironment.ACTIVE_PROFILES_PROPERTY_NAME, "solr");
		SpringApplication.run(StartServer.class, args);
	}
}
