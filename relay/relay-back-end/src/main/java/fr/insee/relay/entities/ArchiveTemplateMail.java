package fr.insee.relay.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.google.common.base.Objects;

@Entity
@Table(name = "archives_template_mail")
public class ArchiveTemplateMail {

	@Id
	@Column(name = "id")
	private Long id;

	@Column(name = "expediteur")
	private String expediteur;

	@Column(name = "objet")
	private String objet;

	@Column(name = "corps_html")
	private String corpsHtml;

	@Column(name = "corps_brut")
	private String corpsBrut;

	@Column(name = "description")
	private String description;

	@OneToOne
	@JoinColumn(name = "id_envoi")
	@JsonIgnore
	private Envoi envoi;

	@Override
	public boolean equals(Object object) {
		if (object instanceof ArchiveTemplateMail) {
			ArchiveTemplateMail other = (ArchiveTemplateMail) object;
			return Objects.equal(this.id, other.id);
		}
		return false;
	}

	@Override
	public int hashCode() {
		return Objects.hashCode(id);
	}

	@Override
	public String toString() {
		return String.format("ArchiveTemplateMail : %d - %s", id, description);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getExpediteur() {
		return expediteur;
	}

	public void setExpediteur(String expediteur) {
		this.expediteur = expediteur;
	}

	public String getObjet() {
		return objet;
	}

	public void setObjet(String objet) {
		this.objet = objet;
	}

	public String getCorpsHtml() {
		return corpsHtml;
	}

	public void setCorpsHtml(String corpsHtml) {
		this.corpsHtml = corpsHtml;
	}

	public String getCorpsBrut() {
		return corpsBrut;
	}

	public void setCorpsBrut(String corpsBrut) {
		this.corpsBrut = corpsBrut;
	}

	public Envoi getEnvoi() {
		return envoi;
	}

	public void setEnvoi(Envoi envoi) {
		this.envoi = envoi;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
