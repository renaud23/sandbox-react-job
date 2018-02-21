package fr.insee.relay.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.google.common.base.Objects;

@Entity
@Table(name = "appels_spoc")
public class AppelSpoc {

	@Id
	@Column(name = "id")
	private Long id;

	@Column(name = "etat")
	@Convert(converter = EtatConverter.class)
	private Etat etat;

	@Column(name = "date")
	private Date date;

	@Column(name = "xml_demande")
	private String xmlDemande;

	@Column(name = "json_retour")
	private String jsonRetour;

	@Column(name = "compteur_total")
	private Integer compteurTotal;

	@Column(name = "compteur_succes")
	private Integer compteurSucces;

	@ManyToOne
	@JoinColumn(name = "id_envoi")
	private Envoi envoi;

	@Override
	public int hashCode() {
		return id.hashCode();
	}

	@Override
	public boolean equals(Object object) {
		if (object instanceof AppelSpoc) {
			AppelSpoc other = (AppelSpoc) object;
			return Objects.equal(this.id, other.id);
		}
		return false;
	}

	@Override
	public String toString() {
		return String.format("Envoi : %d  %s", id, etat);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Etat getEtat() {
		return etat;
	}

	public void setEtat(Etat etat) {
		this.etat = etat;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getXmlDemande() {
		return xmlDemande;
	}

	public void setXmlDemande(String xmlDemande) {
		this.xmlDemande = xmlDemande;
	}

	public String getJsonRetour() {
		return jsonRetour;
	}

	public void setJsonRetour(String jsonRetour) {
		this.jsonRetour = jsonRetour;
	}

	public Integer getCompteurTotal() {
		return compteurTotal;
	}

	public void setCompteurTotal(Integer compteurTotal) {
		this.compteurTotal = compteurTotal;
	}

	public Integer getCompteurSucces() {
		return compteurSucces;
	}

	public void setCompteurSucces(Integer compteurSucces) {
		this.compteurSucces = compteurSucces;
	}

	public Envoi getEnvoi() {
		return envoi;
	}

	public void setEnvoi(Envoi envoi) {
		this.envoi = envoi;
	}
}
