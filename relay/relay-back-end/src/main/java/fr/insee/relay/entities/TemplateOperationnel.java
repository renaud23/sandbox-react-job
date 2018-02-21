package fr.insee.relay.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.google.common.base.Objects;

@Entity
@Table(name = "template_operationnel")
public class TemplateOperationnel {

	@Id
	@Column(name = "id")
	private Long id;

	@Column(name = "idep_creation")
	private String idepCreation;

	@Column(name = "idep_derniere_modif")
	private String idepDerniereModif;

	@Column(name = "date_creation")
	private Date dateCreation;

	@Column(name = "date_derniere_modif")
	private Date dateDerniereModif;

	@Column(name = "description")
	private String description;

	@Column(name = "commentaire")
	private String commentaire;

	@ManyToOne
	@JoinColumn(name = "id_operation")
	private Operation operation;

	@ManyToOne
	@JoinColumn(name = "id_template_mail")
	private TemplateMail templateMail;

	@Override
	public boolean equals(Object object) {
		if (object instanceof TemplateOperationnel) {
			TemplateOperationnel other = (TemplateOperationnel) object;
			return Objects.equal(this.id, other.id);
		}
		return false;
	}

	@Override
	public String toString() {
		return String.format("TemplateOperationnel : %d - %s (%s)", id, description, operation.getDescription());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getIdepCreation() {
		return idepCreation;
	}

	public void setIdepCreation(String idepCreation) {
		this.idepCreation = idepCreation;
	}

	public String getIdepDerniereModif() {
		return idepDerniereModif;
	}

	public void setIdepDerniereModif(String idepDerniereModif) {
		this.idepDerniereModif = idepDerniereModif;
	}

	public Date getDateCreation() {
		return dateCreation;
	}

	public void setDateCreation(Date dateCreation) {
		this.dateCreation = dateCreation;
	}

	public Date getDateDerniereModif() {
		return dateDerniereModif;
	}

	public void setDateDerniereModif(Date dateDerniereModif) {
		this.dateDerniereModif = dateDerniereModif;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCommentaire() {
		return commentaire;
	}

	public void setCommentaire(String commentaire) {
		this.commentaire = commentaire;
	}

	public Operation getOperation() {
		return operation;
	}

	public void setOperation(Operation operation) {
		this.operation = operation;
	}

	public TemplateMail getTemplateMail() {
		return templateMail;
	}

	public void setTemplateMail(TemplateMail templateMail) {
		this.templateMail = templateMail;
	}
}
