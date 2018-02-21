package fr.insee.relay.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.google.common.base.Objects;

@Entity
@Table(name = "template_mail")
public class TemplateMail {

	@Id
	@Column(name = "id")
	private Long id;

	@Column(name = "expediteur")
	private String expediteur;

	@Column(name = "objet")
	private String objet;

	@Column(name = "corps_html")
	private String corps_html;

	@Column(name = "corps_brut")
	private String corps_brut;

	@ManyToOne
	@JoinColumn(name = "id_template_modele")
	private TemplateModele templateModele;

	@Override
	public boolean equals(Object object) {
		if (object instanceof TemplateMail) {
			TemplateMail other = (TemplateMail) object;
			return Objects.equal(this.id, other.id);
		}
		return false;
	}

	@Override
	public String toString() {
		return String.format("TemplateMail : %d - %s (%s)", id, expediteur, objet);
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

	public String getCorps_html() {
		return corps_html;
	}

	public void setCorps_html(String corps_html) {
		this.corps_html = corps_html;
	}

	public String getCorps_brut() {
		return corps_brut;
	}

	public void setCorps_brut(String corps_brut) {
		this.corps_brut = corps_brut;
	}

	public TemplateModele getTemplateModele() {
		return templateModele;
	}

	public void setTemplateModele(TemplateModele templateModele) {
		this.templateModele = templateModele;
	}
}
