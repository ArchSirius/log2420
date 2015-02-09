/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package log2420.td2;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Observer;
import javax.swing.SwingWorker;

/**
 *
 * @author sirius
 */
public class Computer extends SwingWorker<Long, Void> {

    CompteurJetons compteur;
    File fichier;
    
    public Computer(Observer obs) {
        compteur = new CompteurJetons(obs);
    }
    
    public void setFichier(File fichier) {
        this.fichier = fichier;
    }
    
    @Override
    public Long doInBackground() {
        long nbJetons = 0;
        try {
            nbJetons =  compteur.compter(fichier);
        } catch (FileNotFoundException e) {
        }
        return nbJetons; 
    }

    @Override
    protected void done() {
        try {
            //what to do when done
        } catch (Exception ignore) {
        }
    }
}