package fr.insee.relay.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.google.common.base.Objects;

@Entity
@Table(name = "envois")
public class Envoi {

	@Id
	@Column(name = "id")
	private Long id;

	@Column(name = "code")
	private String code;

	@Column(name = "date")
	private Date date;

	@Column(name = "tags")
	@Convert(converter = TagsConverter.class)
	private String[] tags;

	@ManyToOne
	@JoinColumn(name = "id_operation")
	private Operation operation;

	@OneToOne(mappedBy = "envoi")
	private ArchiveTemplateMail archiveTemplateMail;

	@Override
	public int hashCode() {
		return id.hashCode();
	}

	@Override
	public boolean equals(Object object) {
		if (object instanceof Envoi) {
			Envoi other = (Envoi) object;
			return Objects.equal(this.id, other.id);
		}
		return false;
	}

	@Override
	public String toString() {
		return String.format("Envoi : %d - %s", id, code);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String[] getTags() {
		return tags;
	}

	public void setTags(String[] tags) {
		this.tags = tags;
	}

	public Operation getOperation() {
		return operation;
	}

	public void setOperation(Operation operation) {
		this.operation = operation;
	}

	public ArchiveTemplateMail getArchiveTemplateMail() {
		return archiveTemplateMail;
	}

	public void setArchiveTemplateMail(ArchiveTemplateMail archiveTemplateMail) {
		this.archiveTemplateMail = archiveTemplateMail;
	}
}
