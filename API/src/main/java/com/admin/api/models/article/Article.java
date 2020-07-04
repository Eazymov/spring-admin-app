package com.admin.api.models.article;

import java.util.UUID;

import java.sql.Timestamp;

import javax.persistence.Table;
import javax.persistence.Entity;

import com.admin.api.models.base.Base;
import com.admin.api.models.user.User;

import javax.validation.constraints.Size;

@Entity
@Table(name = "articles")
public class Article extends Base {
  @Size(min = 0, max = 255)
  private String title;

  @Size(min = 0, max = 255)
  private String description;

  private String content;

  public Article() {}

  public Article(
    UUID id,
    String title,
    String description,
    String content,
    Timestamp createdOn,
    Timestamp updatedOn,
    User createdBy,
    User updatedBy
  ) {
    super(id, createdOn, updatedOn, createdBy, updatedBy);

    this.title = title;
    this.description = description;
    this.content = content;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getDescription() {
    return description;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public String getContent() {
    return content;
  }

  public void setDescription(String description) {
    this.description = description;
  }
}
