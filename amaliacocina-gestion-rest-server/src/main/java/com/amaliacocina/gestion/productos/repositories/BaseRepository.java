package com.amaliacocina.gestion.productos.repositories;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;

import com.amaliacocina.gestion.productos.model.BaseModel;

public interface BaseRepository<T extends BaseModel> extends JpaRepository<T, Serializable>  {

}
