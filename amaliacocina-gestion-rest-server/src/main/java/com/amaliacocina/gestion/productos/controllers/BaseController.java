package com.amaliacocina.gestion.productos.controllers;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.amaliacocina.gestion.productos.model.BaseModel;
import com.amaliacocina.gestion.productos.repositories.BaseRepository;

public abstract class BaseController<T extends BaseModel> {

	private final BaseRepository<T> repository;

	public BaseController(BaseRepository<T> repository) {
		this.repository = repository;
	}

	@GetMapping
	public Collection<T> findAll() {
		List<T> findAll = this.repository.findAll();
		return findAll;
	}

	@PostMapping
	public ResponseEntity<?> add(@RequestBody T entity) {
		this.repository.save(entity);
		return new ResponseEntity<T>(entity, HttpStatus.OK);
	}

	@GetMapping(value = "/{id}")
	public @ResponseBody T get(@PathVariable long id) {
		return this.repository.getOne(id);
	}

	@PostMapping(value = "/{id}")
	public ResponseEntity<?> update(@PathVariable long id, @RequestBody T entity) {
		T localEntity = this.repository.getOne(id);
		BeanUtils.copyProperties(entity, localEntity);
		return new ResponseEntity<>(this.repository.save(localEntity), HttpStatus.OK);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<?> delete(@PathVariable long id) {
		this.repository.deleteById(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}