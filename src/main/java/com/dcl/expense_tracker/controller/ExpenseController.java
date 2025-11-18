package com.dcl.expense_tracker.controller;

import com.dcl.expense_tracker.model.Expense;
import com.dcl.expense_tracker.service.ExpenseService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/expenses")
@CrossOrigin(origins = {
        "http://localhost:5173",
//        "https://expense-frontend-yourdomain"  //if frontend is deployed later
})
public class ExpenseController {
    private final ExpenseService service;

    public ExpenseController(ExpenseService service){
        this.service = service;
    }

    @GetMapping
    public List<Expense> getAll(){
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Expense getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PostMapping
    public Expense add(@RequestBody Expense expense){
        return service.add(expense);
    }

    @PutMapping("/{id}")
    public Expense update(@PathVariable Long id, @RequestBody Expense expense){
        return service.update(id, expense);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        service.delete(id);
    }
}
